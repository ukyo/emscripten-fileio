#include <stdio.h>
 
int main(void){
    FILE *i, *o;
    int c;
 
    i = fopen("input", "r");
    o = fopen("output", "w");
 
    while((c = fgetc(i)) != EOF) fputc(c, o);
    fclose(i);
    fclose(o);
 
    return 0;
}
