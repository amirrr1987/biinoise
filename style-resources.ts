import less from 'less';

export default {
    // Define your Less variables and mixins here
    resources: [
        // Example variable
        `
    @primary-color: #1890ff;
    `,
    ],
    // Use the less-loader to process the Less styles
    lang: 'less',
    // Enable JavaScript expressions in your Less styles
    lessOptions: {
        javascriptEnabled: true,
    },
    // Use the less package to process the Less styles
    less: {
        lessOptions: {
            javascriptEnabled: true,
        },
    },
    // Optional: Log the Less compilation output to the console
    logger: {
        warn: console.warn,
        error: console.error,
    },
    css: ['ant-design-vue/dist/antd.less'],
    styleResources: {
        // Import your style resources here
        less: ['./style-resources.js'],
    },
};