//kmp
function kmp(source,pattern){
    //表格填充 部分匹配表
    let table = new Array(pattern.length).fill(0);

    {
        //自重复串开始位置
        let i = 1; 
        //已重复次数
        let j = 0;
        while(i<pattern.length){
            
            if(pattern[i] === pattern[j]){
                ++j , ++i;
                table[i] = j;
            }else{
                if(j>0)
                    j = table[j];
                else
                    ++i;     
            }
        }
        console.log(table);
    }


    {
        // source开始位置
        let i = 0;
        //pattern开始位置
        let j = 0;

        while(i<source.length){
            // console.log(table);
            if(source[i] === pattern[j]){
                ++j , ++i;
            }else{
                if(j>0)
                    j = table[j];
                else
                    ++i;     
            }

            if(j===pattern.length){
                console.log(true);
                return;
            }
            
        }
        console.log(false);
        return;

    }
    
}


kmp("abcdabceabadwadwa","abcea1bad");



