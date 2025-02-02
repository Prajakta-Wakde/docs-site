# Introduction

The installation of Zowe&trade; consists of two independent processes: installing the Zowe server components either entirely on z/OS or a combination of z/OS and Docker, and then installing Zowe CLI on a desktop computer.  

The Zowe server components provide a web desktop that runs in a web browser providing a number of applications for z/OS users, together with an API mediation layer provides single-sign on (SSO), organization of the multiple zowe servers under a single website, and other capabilities useful for z/OS developers. 

Because Zowe is a set of components, before installing Zowe, first determine which components you want to install and where you want to install them. This guide provides documentation for all of the components and it is split into sections so you can install as much as you need.

Here are some scenarios to consider:

- If you will only be using the Zowe CLI on PCs, depending on the plugins being used, you may not need to install the Zowe server components.  If you are just using core Zowe CLI groups from your PC, the z/OS you connect to does not required any components of Zowe to be installed on z/OS, unless you want to take advantage of advanced authentication methods such as single sign-on or multi-factor authentication.
- If you are using the Docker technical preview to run the linux parts of Zowe in a container, then you only need to configure Zowe's z/OS component to start the ZSS server.  

Before you start the installation, review the information on system requirements and other considerations.

## Planning z/OS installation

The following information is required during the installation process. Software and hardware prerequisites are covered in the next section.

- The zFS directory where you will install the Zowe runtime files and folders. For more details of setting up and configuring the UNIX Systems Services (USS) environment, see [UNIX System Services considerations for Zowe](configure-uss.md).

- A HLQ that the installation can create a load library and samplib containing load modules and JCL samples required to run Zowe.

- Multiple instances of Zowe can be started from the same Zowe z/OS runtime. Each launch of Zowe has its own zFS directory that is known as an instance directory.

- For Zowe in a high availability configuration, there will be only one instance directory which must be created on a shared file system (zFS directory) where all LPARs in a Sysplex can access. To install Zowe in a Parallel Sysplex environment, a YAML configuration file is used to customize the Zowe high availability instances.

- (If not using Docker) Zowe uses a zFS directory to contain its northbound certificate keys as well as a truststore for its southbound keys. Northbound keys are one presented to clients of the Zowe desktop or Zowe API Gateway, and southbound keys are for servers that the Zowe API gateway connects to.  The certificate directory is not part of the Zowe runtime so that it can be shared between multiple Zowe runtimes and have its permissions secured independently. 

- Zowe has the following started tasks:
   - `ZWESISTC` is a cross memory server that the Zowe desktop uses to perform APF-authorized code. More details on the cross memory server are described in [Configuring the Zowe cross memory server](configure-xmem-server.md).
   - `ZWESASTC` is a cross memory Auxiliary server that is used under some situations in support of a Zowe extension. Auxiliary server is started, controlled, and stopped by the cross memory server, so no need to start it manually. More details are described in [Zowe auxiliary service](configure-xmem-server.md)
   - `ZWESVSTC` brings up other parts of the Zowe runtime on z/OS as requested. This may include Desktop, API mediation layer, ZSS, and more, but when using Docker likely only ZSS will be used here.
   - `ZWESLSTC` is used for Zowe high availability configuration rather than `ZWESVSTC`. It brings up and stops Zowe high availability instances, or specific Zowe components without restarting the entire Zowe high availability instances.
   
     In order for above started tasks to run correctly, security manager configuration needs to be performed.  This is documented in [Configuring the z/OS system for Zowe](configure-zos-system.md) and a sample JCL member `ZWESECUR` is shipped with Zowe that contains commands for RACF, TopSecret, and ACF2 security managers.  

  **Notes:**
  
  - To start the API Mediation Layer as a standalone component, see [API Mediation Layer as a standalone component](api-mediation-standalone.md).
  
  - If you plan to use API ML with basic authentication and JSON web token authentication, you need to run only `ZWESVSTC`. No need to run `ZWESISTC` and `ZWESASTC`.
  
  - If you plan to use API ML with x509 client-side certificate authentication, you need to run `ZWESISTC` and `ZWESVSTC`.

## Topology of the Zowe z/OS launch process

The following diagram depicts the high-level structure of a Zowe installation and runtime.  

<img src={require("../images/common/zowe-directories.png").default} alt="Zowe Directories" width="700px"/> 

### RUNTIME_DIR

The runtime directory `<RUNTIME_DIR>` contains the binaries and executable files. You can create a runtime directory in one of the following ways:
- Executing the `zowe-install.sh` script contained within the `install` directory of a Zowe convenience build.  
- Installing the Zowe SMP/E FMID AZWE001 using the JCL members in the REL4 member.
- Executing the z/OSMF worklow script `ZWERF01` contained in the SMP/E FMID AZWE001.

During execution of Zowe, the runtime directory contents are not modified.  Maintenance or APAR release for Zowe replaces the contents of the runtime directory and are rollup PTFs.  

### INSTANCE_DIR

The instance directory `<INSTANCE_DIR>` is required to launch Zowe.  It is created with the script `<RUNTIME_DIR>/bin/zowe-configure-instance.sh`. More than one instance directory can be created and used to launch multiple instances of Zowe sharing the same runtime directory `<RUNTIME_DIR>`.

Zowe instances are started by running the script `<INSTANCE_DIR>/bin/zowe-start.sh`. This creates a started task with the PROCLIB member `ZWESVSTC` that is provided with the samplib `SZWESAMP` created during the installation of Zowe. The JCL member `ZWESVSTC` starts a USS shell under which it launches its address spaces.  

The instance directory file `instance.env` is used to configure a Zowe launchable. The file is executed during the launch of Zowe and specifies shell variables such as ports and location of dependent directories and services on z/OS.  

The `instance.env` file sets the location of the `<RUNTIME_DIRECTORY>` as well as the `<KEYSTORE_DIRECTORY>`

**Note:** Alternatively, from v1.22.0 release, you can use a YAML format configuration file `zowe.yaml` instead of `instance.env` to configure the Zowe runtime for high availability. To learn more about the `zowe.yaml` file, see [Updating the zowe.yaml configuration file](configure-instance-directory.md).


### KEYSTORE_DIRECTORY

Zowe uses certificates to encrypt data as well as a truststore.  The keystore directory `<KEYSTORE_DIRECTORY>` controls where the certificates are located, either in a JavaKeystore or a z/OS keyring.  A `<KEYSTORE_DIRECTORY>` is created by using the script `<RUNTIME_DIR>/bin/zowe-setup-certificates.sh`.
