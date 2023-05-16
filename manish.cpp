#include<stdio.h>
int main()  
{  
     
    for(int i=6;i>=1;i--)  
    {  
      for(int j=1;j<=i;j++)  
      {  
         if(j==1 || j==i || i==6 )  
          printf("*");  
          else  
          printf(" ");  
      }  
      printf("\n");  
    }  
    return 0;  
} 
