webpackJsonp([56],{ChfA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("jnSK"),o=r("vMJZ"),l=r("+Yhu"),u=r("zp1X"),i={components:{sesectDatas:s.default},data:function(){return{ruleForm:{usergroups:"",objs:[]},rules:{usergroups:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},groups:[],allwikis:[]}},created:function(){this.getGroups(),this.getAllwikis()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(u.i)(t.ruleForm).then(function(e){t.$message({message:"恭喜你，添加成功",type:"success"}),t.ruleForm={usergroups:"",objs:[]},t.$emit("DialogStatus",!1)}).catch(function(e){t.$message.error("添加失败"),console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields(),this.getAllwikis()},getWikis:function(e){this.ruleForm.objs=e},getGroups:function(){var e=this;Object(o.d)().then(function(t){e.groups=t.data})},getAllwikis:function(){var e=this;Object(l.d)().then(function(t){e.allwikis=[];for(var r=t.data,s=0,o=r.length;s<o;s++)e.allwikis.push({key:r[s].title})})}}},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户组",prop:"usergroups"}},[r("el-select",{attrs:{placeholder:"请选择用户组"},model:{value:e.ruleForm.usergroups,callback:function(t){e.$set(e.ruleForm,"usergroups",t)},expression:"ruleForm.usergroups"}},e._l(e.groups,function(e){return r("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"选择文档",prop:"hosts"}},[r("sesect-datas",{attrs:{selectdata:e.ruleForm.objs,alldata:e.allwikis},on:{getDatas:e.getWikis}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},a=[],c={render:n,staticRenderFns:a},m=c,f=r("VU/8"),p=f(i,m,!1,null,null,null);t.default=p.exports}});