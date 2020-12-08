document.getElementById('submit').onclick = function(){//appの内容を読み取る
    var min = document.app.minTemp.value*10;//最小値 = minTemp*10
    var max = document.app.maxTemp.value*10;//最大値 = maxTemp*10
    if(min > max){
        window.alert('！ERROR！ (0x00000000)\n値の入力が正しくありません。');
    }else{
        var result0 = Math.random()*(max-min)+min;//結果０ = 最小値と最大値の間の乱数
        var result1 = Math.floor(result0)/10;//結果１ = 結果０の小数点以下を切り捨て/10
        var result2 = '';
        if(result1 >= 37.5){
            result2 = '\n病院に行くことになりますよw'
        }
        window.alert(result1+' ℃'+result2);
    }
}
