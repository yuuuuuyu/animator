export default [{
    path: '/',
    name: '首页',
    component: (resolve) => require(['./views/Index.vue'], resolve),
    meta: {
        title: '动画场景编排组件'
    },
    children: [{
        path: 'demo1',
        name: '演示1',
        meta: {
            title: '匿名模式',
            link: 'https://github.com/cutting-mat/animater/blob/main/src/test/views/Visual.vue',
            description: '最简单的应用方式，匿名动画组元素依次进场'
        },
        component: (resolve) => require(['./views/Demo1.vue'], resolve),
    }, {
        path: 'demo2',
        name: '演示2',
        meta: {
            title: '受控模式',
            link: 'https://github.com/cutting-mat/animater/blob/main/src/test/views/Visual2.vue',
            description: '支持 `v-modle / value`, 通过数据驱动进出场状态'
        },
        component: (resolve) => require(['./views/Demo2.vue'], resolve),
    }, {
        path: 'demo3',
        name: '演示3',
        meta: {
            title: '编排模式',
            link: 'https://github.com/cutting-mat/animater/blob/main/src/test/views/Visual3.vue',
            description: '为动画元素编组，用实例方法控制各动画组切换'
        },
        component: (resolve) => require(['./views/Demo3.vue'], resolve),
    }, {
        path: 'demo4',
        name: '演示4',
        component: (resolve) => require(['./views/Demo4.vue'], resolve),
        meta: {
            title: '页面离场动画',
            link: 'https://github.com/cutting-mat/animater/blob/main/src/test/views/Visual4.vue',
            description: '配合 VueRouter 的 `beforeRouteLeave` 钩子, 实现页面离场动画'
        }
    }]
}]