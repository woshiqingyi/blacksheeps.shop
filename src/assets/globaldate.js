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

export default {
    GenderItems,
    ProvinceItems
}
