//
//  main.c
//  mynapi
//
//  Created by tangxiaoji on 2020/3/19.
//  Copyright © 2020 tangxiaoji. All rights reserved.
//

#include <stdio.h>
#include "quick_sort.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    
    int arr[] = {21, 91, 13, 33, 12, 67};
    quick_sort(arr, 6);

    for (int i = 0; i < 6; i++)
    {
       printf("Element[%d] = %d\n", i, arr[i] );
    }
    
    return 0;
}
