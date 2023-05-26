#include <stdio.h>

int main()
{
    int numberA, numberB, sum;

    do
    {

        scanf("%d", &numberA);
        scanf("%d", &numberB);
        if (numberA==99 && numberB==0)
        {
            printf("Finish");
            break;
        }
        else {
            sum=numberA+numberB;
            printf("Sum: %d\n2", sum);
        };
        
    } while (numberA && numberB);
    return 0;
}
