const GenderItems = [
    {
        Name: "男",
        Code: "male"
    },
    {
        Name: "女",
        Code: "female"
    }
]

const ProvinceItems = [
    {
        Name: "北京",
        Code: "北京",
        CityItems: [
            {
                Name: '东城',
                Code: '东城'
            },
            {
                Name: '西城',
                Code: '西城'
            },
            {
                Name: '崇文',
                Code: '崇文'
            }

        ]
    },
    {
        Name: "江苏",
        Code: "江苏",
        CityItems: [
            {
                Name: '南京',
                Code: '南京'
            },
            {
                Name: '苏州',
                Code: '南京'
            },
            {
                Name: '无锡',
                Code: '南京'
            }

        ]
    },
]
Array.prototype.remove = function(val) {
    for(var i=0; i<this.length; i++) {
      if(this[i] == val) {
        this.splice(i, 1);
        break;
      }
    }
}

var Fun = function(count) {
    // 拼接时间
    let time1 = new Date()
    time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
    let Y1 = time1.getFullYear()
    let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
    let time2 = new Date()
    time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
    let Y2 = time2.getFullYear()
    let M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    let D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
    return Y2 + '-' + M2 + '-' + D2 + ' 00:00:00';
}

export default {
    GenderItems,
    ProvinceItems,
    Fun
}
