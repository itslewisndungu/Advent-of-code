package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main()  {
    data, err := ioutil.ReadFile("./test_input.txt") 

    if err != nil {
        panic(err)
    }

    content := string(data)
    arrContent := strings.Split(content, "\n\n")


    for str := range arrContent{
        fmt.Println(str)
        
    }
}
