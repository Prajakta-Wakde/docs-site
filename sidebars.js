module.exports = {
  "getting-started": [
    //id of the sidebar
    {
      type: "category", // doc(default), 'link'(external links), 'ref'(link without sidebar)
      label: "Get Started",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Zowe fundamentals",
          items: [
            "getting-started/overview", //folder-name/filename
            "getting-started/zowe-architecture",
            "getting-started/freqaskques",
          ],
        },
        "getting-started/summaryofchanges.md",
        {
          type: "category",
          label: "Zowe quick start",
          items: [
            "getting-started/zowe-getting-started.md",
            "getting-started/cli-getting-started.md",
          ],
        },
        {
          type: "category",
          label: "Learning paths",
          items: [
            "getting-started/user-roadmap-apiml.md",
            "getting-started/user-roadmap-app-framework.md",
            "getting-started/user-roadmap-zowe-cli.md",
            "getting-started/user-roadmap-zowe-explorer.md",
            "getting-started/user-roadmap-client-sdk.md",
            "getting-started/user-roadmap-zowe-mobile.md",
          ],
        },
        "getting-started/zowe-resources.md",
      ],
    },
  ],
  user-guide: [
    //id of the sidebar
    {
      type: "category", // doc(default), 'link'(external links), 'ref'(link without sidebar)
      label: "User Guide",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Planning and preparing the installation",
          items: [
            "user-guide/installandconfig.md",
            "user-guide/systemrequirements.md",
            "user-guide/install-nodejs-zos.md",
            "user-guide/systemrequirements-zosmf.md",
            "user-guide/systemrequirements-zosmf-lite.md",
            "user-guide/configure-uss.md",
          ],
        },
        {
          type: "category",
          label: "Installing Zowe z/OS components",
          items: [
            "user-guide/install-zos.md",
            "user-guide/install-zowe-zos-convenience-build.md",
            "user-guide/install-zowe-smpe.md",
            "user-guide/install-zowe-smpe-zosmf-workflow.md",
            "user-guide/api-mediation-standalone.md",  
            "user-guide/configure-zos-system.md",
            "user-guide/configure-certificates.md",
            "user-guide/configure-certificates-keystore.md",
            "user-guide/configure-certificates-keyring.md",
            "user-guide/configure-xmem-server.md",
            "user-guide/configure-instance-directory.md",
            "user-guide/configure-zowe-server.md",
            "user-guide/configure-zowe-zosmf-workflow.md",
            "user-guide/verify-zowe-runtime-install.md",
            "user-guide/configure-auxiliary-address-space.md",
            "user-guide/upgrade-zos-system.md",
            "user-guide/stop-zowe-zos.md",
            "user-guide/zowe-zos-uninstall.md",
          ],
        },
        {
          type: "category",
          label: "Installing Zowe Docker Bundle",
          items: [
            "user-guide/install-docker.md",
            "user-guide/install-docker-image.md",
            "user-guide/configuring-docker.md",
          ],
        },
        {
          type: "category",
          label: "Installing Zowe CLI",
          items: [
            "user-guide/cli-installcli.md",
            "user-guide/install-cli-via-proxy.md",
            "user-guide/cli-updatingcli.md",
            "user-guide/cli-uninstall.md",
          ],
        },
        {
          type: "category",
          label: "Advanced Zowe configuration",
          items: [
            "user-guide/mvd-configuration.md",
            "user-guide/cli-configuringcli.md",
            "user-guide/configure-data-sets-jobs-api.md",
            "user-guide/api-mediation/api-gateway-configuration.md",
            "user-guide/api-mediation/api-mediation-internal-configuration.md",
          ],
        },
        {
          type: "category",
          label: "Using Zowe",
          items: [
            "user-guide/zowe-getting-started-tutorial.md",
            "user-guide/mvd-using.md",
            "user-guide/mvd-editor.md",
            "user-guide/api-mediation-api-catalog.md",
            "user-guide/cli-usingcli.md",
            "user-guide/sdks-using.md",
          ],
        },
        {
          type: "category",
          label: "Zowe CLI extensions and plug-ins",
          items: [
            "user-guide/cli-extending.md",
            "user-guide/cli-swreqplugins.md",
            "user-guide/cli-installplugins.md",
            "user-guide/cli-cicsplugin.md",
            "user-guide/cli-db2plugin.md",
            "user-guide/cli-ftpplugin.md",
            "user-guide/cli-imsplugin.md",
            "user-guide/cli-mqplugin.md",
            "user-guide/cli-scsplugin.md",
          ],
        },
        {
          type: "category",
          label: "Zowe Explorer",
          items: [
            "user-guide/ze-install.md",
            "user-guide/ze-profiles.md",
            "user-guide/ze-usage.md",
            "user-guide/ze-extensions.md",
          ],
        },
      ],
    },
  ],    

  extending: [
    {
      type: "category",
      label: "Extend",
      items: [
        {
          type: "category",
          label: "Overview",
          items: [
            "extend/extend-zowe-overview.md",
            "extend/packaging-zos-extensions.md",
            "extend/install-configure-zos-extensions.md",
            "extend/lifecycling-with-zwesvstc.md",
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe CLI",
          items: [
            "extend/extend-cli/cli-devTutorials.md",
            "extend/extend-cli/cli-setting-up.md",
            "extend/extend-cli/cli-installing-sample-plugin.md",
            "extend/extend-cli/cli-extending-a-plugin.md",
            "extend/extend-cli/cli-developing-a-plugin.md",
            "extend/extend-cli/cli-implement-profiles.md",
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe API Mediation Layer",
          items: [
            "extend/extend-apiml/onboard-overview.md",
            "extend/extend-apiml/onboard-plain-java-enabler.md",
            "extend/extend-apiml/onboard-plain-java-enabler-external-configuration.md",
            "extend/extend-apiml/onboard-direct-eureka-call.md",
            "extend/extend-apiml/onboard-spring-boot-enabler.md",
            "extend/extend-apiml/onboard-micronaut-enabler.md",
            "extend/extend-apiml/onboard-nodejs-enabler.md",
            "extend/extend-apiml/onboard-static-definition.md",
            "extend/extend-apiml/api-mediation-sso.md",
            "extend/extend-apiml/service-information.md",
            "extend/extend-apiml/api-mediation-message-service.md",
            "extend/extend-apiml/api-mediation-security.md",
            "extend/extend-apiml/api-mediation-routing.md",
            "extend/extend-apiml/api-mediation-passtickets.md",
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe Application Framework",
          items: [
            "extend/extend-desktop/mvd-extendingzlux.md",
            "extend/extend-desktop/mvd-plugindefandstruct.md",
            "extend/extend-desktop/mvd-buildingplugins.md",
            "extend/extend-desktop/mvd-installplugins.md",
            "extend/extend-desktop/mvd-embeddingplugins.md",
            "extend/extend-desktop/mvd-dataservices.md",
            "extend/extend-desktop/mvd-authentication-api.md",
            "extend/extend-desktop/mvd-internationalization.md",
            "extend/extend-desktop/mvd-desktopandwindowmgt.md",
            "extend/extend-desktop/mvd-configdataservice.md",
            "extend/extend-desktop/mvd-uribroker.md",
            "extend/extend-desktop/mvd-apptoappcommunication.md",
            "extend/extend-desktop/mvd-iframecomm.md",
            "extend/extend-desktop/mvd-errorreportingui.md",
            "extend/extend-desktop/mvd-logutility.md",
            "extend/extend-desktop/mvd-conda.md",
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe Application Framework",
          items: [
            "extend/extend-desktop/mvd-extendingzlux.md",
            "extend/extend-desktop/mvd-plugindefandstruct.md",
            "extend/extend-desktop/mvd-buildingplugins.md",
            "extend/extend-desktop/mvd-installplugins.md",
            "extend/extend-desktop/mvd-embeddingplugins.md",
            "extend/extend-desktop/mvd-dataservices.md",
            "extend/extend-desktop/mvd-authentication-api.md",
            "extend/extend-desktop/mvd-internationalization.md",
            "extend/extend-desktop/mvd-desktopandwindowmgt.md",
            "extend/extend-desktop/mvd-configdataservice.md",
            "extend/extend-desktop/mvd-uribroker.md",
            "extend/extend-desktop/mvd-apptoappcommunication.md",
            "extend/extend-desktop/mvd-iframecomm.md",
            "extend/extend-desktop/mvd-errorreportingui.md",
            "extend/extend-desktop/mvd-logutility.md",
            "extend/extend-desktop/mvd-conda.md",
          ],
        },
        "extend/extend-sdks.md", 
        "extend/zowe-conformance-program.md",
      ],
    },
  ],

  troubleshooting: [
    {
      type: "category",
      label: "Troubleshoot",
      items: [
        {
          type: "category",
          label: "Overview",
          items: [
            "troubleshoot/troubleshooting.md",
            "troubleshoot/troubleshoot-zowe-release.md",
            "troubleshoot/troubleshoot-diagnostics.md",
            "troubleshoot/verify-fingerprint.md",
          ],
        },
        "troubleshoot/troubleshoot-zos.md",
        {
          type: "category",
          label: "Zowe API Mediation Layer",
          items: [
            "troubleshoot/troubleshoot-apiml.md",
            "troubleshoot/troubleshoot-apiml-error-codes.md",
          ],
        },
        {
          type: "category",
          label: "Zowe Application Framework",
          items: [
            "troubleshoot/app-framework/app-troubleshoot.md",
            "troubleshoot/app-framework/app-mustgather.md",
            "troubleshoot/app-framework/app-issue.md",
          ],
        },
        "troubleshoot/troubleshoot-zos-services.md",
        {
          type: "category",
          label: "Zowe CLI",
          items: [
            "troubleshoot/cli/troubleshoot-cli.md",
            "troubleshoot/cli/mustgather-cli.md",
            "troubleshoot/cli/zosmf-cli.md",
            "troubleshoot/cli/known-cli.md",
            "troubleshoot/cli/cli-issue.md",
          ],
        },
        {
          type: "category",
          label: "Zowe Explorer",
          items: [
            "troubleshoot/ze/troubleshoot-ze.md",
            "troubleshoot/ze/known-ze.md",
            "troubleshoot/ze/ze-issue.md",
          ],
        },
      ],
    },
  ],
  contributing: [
    {
      type: "category",
      label: "Contribute",
      items: [
        "contribute/roadmap-contribute.md",
        {
          type: "category",
          label: "Code Guidelines",
          items: [
            "contribute/guidelines-code/categories.md",
            "contribute/guidelines-code/general.md",
            "contribute/guidelines-code/code-and-patches.md",
            "contribute/guidelines-code/documentation.md",
          ],
        },
        {
          type: "category",
          label: "UI Guidelines",
          items: [
            "contribute/guidelines-ui/ui.md",
            "contribute/guidelines-ui/colors.md",
            "contribute/guidelines-ui/typography.md",
            "contribute/guidelines-ui/grid.md",
            "contribute/guidelines-ui/icon.md",
            "contribute/guidelines-ui/appicon.md",
          ],
        },
        "contribute/contributing.md",
      ],
    },
  ],
  reference: [
    {
      type: "category",
      label: "Contribute",
      items: [
        "appendix/zowe-cli-commannd-reference.md",
        "appendix/zowe-api-reference.md",
        "appendix/bill-of-materials.md",
        "appendix/tpsr.md",
      ],
    },
  ],
};

//items should be array of only strings, or array of object and strings
//the object should be 'string': array, not 'string': 'string'
