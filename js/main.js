var waterContentOfFood = {
    "1": {"name": "米饭", "rate": 0.71},
    "2": {"name": "大米粥", "rate": 0.88},
    "3": {"name": "面条(煮)", "rate": 0.73},
    "4": {"name": "馒头", "rate": 0.4},
    "5": {"name": "花卷", "rate": 0.46},
    "6": {"name": "烧饼", "rate": 0.26},
    "7": {"name": "油饼", "rate": 0.25},
    "8": {"name": "包子", "rate": 0.53},
    "9": {"name": "水饺", "rate": 0.55},
    "10": {"name": "蛋糕", "rate": 0.19},
    "11": {"name": "饼干", "rate": 0.06},
    "12": {"name": "面包", "rate": 0.27},
    "13": {"name": "油条", "rate": 0.22},
    "14": {"name": "馄饨", "rate": 0.59},
    "15": {"name": "鸡/鸭蛋", "rate": 0.74},
    "16": {"name": "牛奶", "rate": 0.84},
    "17": {"name": "豆浆", "rate": 0.96},
    "18": {"name": "牛肉", "rate": 0.7},
    "19": {"name": "猪肉", "rate": 0.55},
    "20": {"name": "羊肉", "rate": 0.73},
    "21": {"name": "鱼虾蟹", "rate": 0.77},
    "22": {"name": "鸡肉", "rate": 0.7},
    "23": {"name": "豆腐脑", "rate": 0.97},
    "24": {"name": "豆腐", "rate": 0.83},
    "25": {"name": "鲜青菜/菌藻", "rate": 0.95} ,
    "26": {"name": "土豆", "rate": 0.8},
    "27": {"name": "坚果", "rate": 0.03},
    "28": {"name": "板栗", "rate": 0.55},
    "29": {"name": "西瓜", "rate": 0.93},
    "30": {"name": "梨类", "rate": 0.86},
    "31": {"name": "李子", "rate": 0.9},
    "32": {"name": "樱桃", "rate": 0.88},
    "33": {"name": "苹果", "rate": 0.86},
    "34": {"name": "橘子/柑橘", "rate": 0.87},
    "35": {"name": "火龙果", "rate": 0.84},
    "36": {"name": "葡萄", "rate": 0.89},
    "37": {"name": "桃子", "rate": 0.89},
    "38": {"name": "香蕉", "rate": 0.77},
    "39": {"name": "草莓", "rate": 0.91},
    "40": {"name": "菠萝", "rate": 0.88},
    "41": {"name": "黄瓜", "rate": 0.96},
    "42": {"name": "西红柿", "rate": 0.94},
};

function calculateWaterContent(){
    var food_type_list = []
    var food_weight_list = []

    $('.user_input').each(function(index, obj) {
        var row = $(this);

        row.find('select').each(function() {
            var select = $(this);
            var selectedValue = select.val();
//            console.log("index: " + index + ",选中的值: " + selectedValue);

            food_type_list.push(selectedValue)

        });

        row.find('.food_weight').each(function() {
            var food_weight_obj = $(this);
            var food_weight = food_weight_obj.val();
//            console.log("index: " + index + ",克重: " + food_weight);

            food_weight_list.push(food_weight)

        });

    });
//    console.log(food_type_list)
//    console.log(food_weight_list)
    var total_food_water_content = 0
    for (var i = 0; i < food_type_list.length; i++) {
        food_type = food_type_list[i]
        food_weight = food_weight_list[i]

        if (food_type != 'default' && food_weight != "") {
            var rate = waterContentOfFood[food_type]['rate'];
            var food_name = waterContentOfFood[food_type]['name'];
            var tmp_total_content = rate * parseInt(food_weight)
            console.log(food_name + ' 总含水量: ' + tmp_total_content)

            total_food_water_content += total_food_water_content

        }
    }
    console.log(total_food_water_content)



}


 $(document).ready(function() {
    var select = $('.food_type');

    $.each(waterContentOfFood, function(key, val) {
//        console.log(key + val)
        var option = $('<option>').val(key).text(val.name);
        select.append(option);
    });


    $('.food_type, .food_weight').change(function() {
        calculateWaterContent()

    })

});



