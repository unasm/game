<?php
//计算字符串中字符的长度，包括中文和英文特殊字符
function count_strLen($str){
    $ccLen  = 0;
    $ascLen = strlen($str);
    $ind    = 0;
    for ($ind = 0; $ind < $ascLen; $ind++) {
        if (ord(substr($str, $ind, 1)) > 0xa0) {
            $ccLen++;
            $ind++;
        } else {
            $ccLen++;
        }
    }
    return $ccLen;
}
?>
