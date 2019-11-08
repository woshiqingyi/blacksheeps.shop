(function (global,factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vcan = factory());
}(this,(function () { 
    // Array.prototype.remove = function(val) {
    //     for(var i=0; i<this.length; i++) {
    //       if(this[i] == val) {
    //         this.splice(i, 1);
    //         break;
    //       }
    //     }
    // };
    window.vcan = window.$v =
    {
        Debug:function(){
            return process.env.NODE_ENV=="development";
        },
        Dictionary: function () {
            this.elements = new Array();
            //Length of Dictionary
            this.length = function () {
                return this.elements.length;
            };
            //Check whether the Dictionary is empty
            this.isEmpty = function () {
                return (this.length() < 1);
            };
            //remove all elements from the Dictionary
            this.removeAll = function () {
                this.elements = new Array();
            };
            //get specify element of the dictionary
            this.element = function (index) {
                var rlt = null;
                if (index >= 0 && index < this.elements.length) {
                    rlt = this.elements[index];
                }
                return rlt;
            }
            //check whether the Dictionary contains this key
            this.exists = function (key) {
                var rlt = false;
                try {
                    for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                        if (this.elements[i].key == key) {
                            rlt = true;
                            break;
                        }
                    }
                }
                catch (ex) {
                }
                return rlt;
            };
            //check whether the Dictionary contains this value
            this.containsValue = function (value) {
                var rlt = false;
                try {
                    for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                        if (this.elements[i].value == value) {
                            rlt = true;
                            break;
                        }
                    }
                }
                catch (ex) {
                }
                return rlt;
            };
            //remove this key from the Dictionary
            this.remove = function (key) {
                var rlt = false;
                try {
                    for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                        if (this.elements[i].key == key) {
                            this.elements.splice(i, 1);
                            rlt = true;
                            break;
                        }
                    }
                }
                catch (ex) {
                }
                return rlt;
            };
            //add this key/value to the Dictionary,if key is exists,replace the value
            this.add = function (key, value) {
                this.remove(key);
                this.elements.push({
                    key: key,
                    value: value
                });
            };
            //add this key/value to the Dictionary,if key is exists,append value
            this.set = function (key, value) {
                var arr = this.getItem(key);
                if (arr != null) {
                    if (typeof (arr) == "object") {
                        arr.unshift.apply(arr, value);
                        value = arr;
                    }
                    else {
                        var array = [];
                        array.push(arr);
                        array.unshift.apply(array, value);
                        value = array;
                    }
                    this.remove(key);
                }
                this.elements.push({
                    key: key,
                    value: value
                });
            }
            //get value of the key
            this.getItem = function (key) {
                var rlt = null;
                try {
                    for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                        if (this.elements[i].key == key) {
                            rlt = this.elements[i].value;
                            break;
                        }
                    }
                }
                catch (ex) {
                }
                return rlt;
            };
            //get all keys of the dictionary
            this.keys = function () {
                var arr = [];
                for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                    arr.push(this.elements[i].key);
                }
                return arr;
            }
            //get all values of the dictionary
            this.values = function () {
                var arr = [];
                for (var i = 0, iLen = this.length() ; i < iLen; i++) {
                    arr.push(this.elements[i].value);
                }
                return arr;
            }
        },
        common: {
            
        },
        service:{

        },
        loading:{

        },
        site:{
            localhost:"http://localhost:8080",
            staff:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://staff.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                login:function(){
                    $v.common.navigate(this.url()+"/#/login");
                }
            },
            manage:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://manage.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                login:function(){
                    $v.common.navigate(this.url()+"/#/login");
                }
            },
            business:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://ec.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                login:function(){
                    $v.common.navigate(this.url()+"/#/login");
                }
            },
            trade:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://trade.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                login:function(){
                    $v.common.navigate(this.url()+"/#/login");
                }
            },
            index:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://www.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                register:function(){
                    $v.common.navigate(this.url()+"/#/register");
                }
            },
            independent:{
                url:function(){
                    if($v.Debug()){
                        return $v.site.localhost;
                    }
                    else{
                        return "https://ins.yqybl.com";
                    }
                },
                open:function(){
                    $v.common.openWindow(this.url());
                },
                navigate:function(){
                    $v.common.navigate(this.url());
                },
                login:function(){
                    $v.common.navigate(this.url()+"/#/login");
                }
            }
        },
        global:{
            CompleteStatus:false
        }
    };
    $.extend(window.vcan.common,
    {
        recommender:"",
        isEmail: function (str) {
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            return reg.test(str);
        },
        isPhone: function (str) {
            var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            return reg.test(str);
        },
        isEmpty: function (str) {
            return !str || str.length == 0;
        },
        getQueryStringByName: function (name) {
            var result = location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
            if (result == null || result.length < 1) {
                return "";
            }
            return result[1];
        },
        getCurrentUrl:function(){
            return location.href;
        },
        formatDate:function(date, fmt) {
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds()
            };
            var padLeftZero=function(str) {
                return ('00' + str).substr(str.length);
            };
            for (let k in o) {
                if (new RegExp(`(${k})`).test(fmt)) {
                    let str = o[k] + '';
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                }
            }
            return fmt;
        },
        hasLogined:function(){
            var t=$.cookie("token");
            return t&&t!='null';
        },
        openWindow:function(url){
            window.open(url,"_blank");
        },
        navigate:function(url){
            window.location.href=url;
        },
        getPreMonth:function(date) {
            var arr = date.split('-');
            var year = arr[0]; //获取当前日期的年份
            var month = arr[1]; //获取当前日期的月份
            var day = arr[2]; //获取当前日期的日
            var days = new Date(year, month, 0);
            days = days.getDate(); //获取当前日期中月的天数
            var year2 = year;
            var month2 = parseInt(month) - 1;
            if (month2 == 0) {
                year2 = parseInt(year2) - 1;
                month2 = 12;
            }
            var day2 = day;
            var days2 = new Date(year2, month2, 0);
            days2 = days2.getDate();
            if (day2 > days2) {
                day2 = days2;
            }
            if (month2 < 10) {
                month2 = '0' + month2;
            }
            var t2 = year2 + '-' + month2 + '-' + day2;
            return t2;
        },
        /**
         * 获取下一个月
         *
         * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
         */        
        getNextMonth:function(date) {
            var arr = date.split('-');
            var year = arr[0]; //获取当前日期的年份
            var month = arr[1]; //获取当前日期的月份
            var day = arr[2]; //获取当前日期的日
            var days = new Date(year, month, 0);
            days = days.getDate(); //获取当前日期中的月的天数
            var year2 = year;
            var month2 = parseInt(month) + 1;
            if (month2 == 13) {
                year2 = parseInt(year2) + 1;
                month2 = 1;
            }
            var day2 = day;
            var days2 = new Date(year2, month2, 0);
            days2 = days2.getDate();
            if (day2 > days2) {
                day2 = days2;
            }
            if (month2 < 10) {
                month2 = '0' + month2;
            }
        
            var t2 = year2 + '-' + month2 + '-' + day2;
            return t2;
        },
        htmlEncodeByRegExp:function (str){  
            var s = "";
            if(str.length == 0) return "";
            s = str.replace(/&/g,"&amp;");
            s = s.replace(/</g,"&lt;");
            s = s.replace(/>/g,"&gt;");
            s = s.replace(/ /g,"&nbsp;");
            s = s.replace(/\'/g,"&#39;");
            s = s.replace(/\"/g,"&quot;");
            return s;  
        },
        htmlDecodeByRegExp:function (str){  
            var s = "";
            if(str.length == 0) return "";
            s = str.replace(/&amp;/g,"&");
            s = s.replace(/&lt;/g,"<");
            s = s.replace(/&gt;/g,">");
            s = s.replace(/&nbsp;/g," ");
            s = s.replace(/&#39;/g,"\'");
            s = s.replace(/&quot;/g,"\"");
            return s;  
        },
        getCardBodyHeight(){
            var height=$("body").height()-90;
            return height+"px";
        }
    });
    $.extend(window.vcan.service,{
        token: null,//登录token
        version:"PRODUCTION",//DEBUG->调试,TEST->测试版,PRODUCTION->正式版
        baseUrl:{
            // DEBUG:"http://localhost:34402/api/gateway",
            // TEST:"https://test.yqybl.com/api",
            PRODUCTION:"http://localhost:8080/user"
        },
        fileUrl:{
            // DEBUG:"http://filesvc.yqytest.com:81/api/gateway/upload",
            // TEST:"http://filesvc.yqytest.com:81/api/gateway/upload",
            // PRODUCTION:"https://filesvc.yqybl.com:444/api/gateway/upload"
        },
        // baseUrl: ["http://trdsvc.yqytest.com:81/api/gateway","https://trdsvc.yqybl.com/api/gateway", "http://localhost:34402/api/gateway"],
        // fileUrl:['http://filesvc.yqytest.com:81/api/gateway/upload?FilePath=TRD_Personal_Certification',
        // 'http://filesvc.yqytest.com:81/api/gateway/upload?FilePath=TRD_Company_Certification',
        // 'http://filesvc.yqytest.com:81/api/gateway/upload?FilePath=TRD_TranData'],
        // fileUrl:['https://filesvc.yqybl.com:444/api/gateway/upload?FilePath=TRD_Personal_Certification',
        // 'https://filesvc.yqybl.com:444/api/gateway/upload?FilePath=TRD_Company_Certification',
        // 'https://filesvc.yqybl.com:444/api/gateway/upload?FilePath=TRD_TranData'],
        getBaseUrl: function () {
            return this.baseUrl[this.version];
        },
        getFileUrl: function () {
            return this.fileUrl[this.version];
        },
        call: function (options) {
            if (!options.type) options.type = "GET";
            if (!options.dataType) options.dataType = "json";
            if (!options.traditional) options.traditional = false;
            
            $v.loading.disabled=!!options.disabledLoading;
            var t=$.cookie("token");
            $.ajax({
                type: options.type,
                dataType: 'jsonp',
                traditional: options.traditional,
                url: window.$v.service.getBaseUrl()+ "/" + options.action,
                dataType: options.dataType,
                data: {__Token__:t,Data:options.data},
                crossDomain: true,
                success: function (data) {
                    if (options.callback)
                        options.callback(data);
                },
                error: function (xhr, status, error) {
                    if (xhr.status == 401) {
                        var t=$.cookie("token");
                        if(t&&t!="null"&&t!=""){
                            window.$message.error('登录已过期,请重新登录!');
                        }
                        $.cookie("token", null);
                        window.$router.push({name:'login',params:{}});
                    }
                }
            });
        },
        openWindow:function(options){
            var url=window.$v.service.getBaseUrl() + "/" + options.controller + "/" + options.action;
            url+="?";
            var query=[];
            if(options.data&&options.data.length){
                $.each(options.data,function(index,item){
                    query.push(item.key+"="+escape(item.value));
                });
            }
            var t=$.cookie("token");
            t=t&&t!='null'?t: "";
            query.push("token="+t);
            url+=query.join("&");
            window.$v.common.openWindow(url);
        }
    });
    $.extend(window.vcan.loading,
    {
        current:null,
        loadCount:0,
        disabled:false,
        load:function(msg)
        {
            if(this.disabled)return;
            this.loadCount++;
            this.current=window.$loading.service({
                fullscreen:true,
                text:msg||"正在处理数据，请稍候...",
                lock: false,
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'                
            });     
        },
        close:function()
        {
            this.loadCount--;
            if(this.current&&this.loadCount<=0)
            {
                this.loadCount=0;
                this.current.close();
            }
        }
    })
    $(document).ajaxStart(function () {
        window.vcan.loading.load();
    });
    $(document).ajaxStop(function () {
        window.vcan.loading.close();
    });
    return window.vcan;
   
})));

export default window.vcan