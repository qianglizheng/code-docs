import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        "portfolio",
        {
            text: "计算机基础",
            icon: "computer",
            prefix: "basics/",
            collapsible: true,
            children: [
                {
                    text: "算法",
                    icon: "circle",
                    prefix: "algorithms/",
                    collapsible: true,
                    children: "structure",
                },
                {
                    text: "操作系统",
                    icon: "redhat",
                    prefix: "operatingSystem/",
                    collapsible: true,
                    children: "structure",
                }
            ],
        },
        {
            text: "开发工具",
            icon: "tool",
            prefix: "tools/",
            collapsible: true,
            children: "structure"
        },
        {
          text: "Java",
          icon: "java",
          prefix: "java/",
          children: "structure",
        },

    ],
});
