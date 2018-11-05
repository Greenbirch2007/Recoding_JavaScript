

import os


themes = ["1.初试Vue.js","2.数据绑定和第一个Vue应用","3.计算属性","4.v-bind及class与style绑定","5.内置指令","6.表单与v-model","7.组件详解","8.自定义指令","9.Render函数","10.使用webpack","11.插件","12.iView经典组件剖析","13.实战：知乎日报项目开发","14.实战：电商网站项目开发","15.相关开源项目介绍","16.HTML5脚本教程","17.错误处理和调试","18.JavaScript与XML","19.E4X","20.JSON","21.Ajax与Comet","22.高级技巧","23.离散应用与客户端存储","24.最佳实践","25.新兴的API"]
base = "/home/gb/Recoding_JavaScript/Vue.js实战/"
for i in themes:
    file_name = base + str(i)
    os.mkdir(file_name)
