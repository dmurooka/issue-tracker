int n;
do
{
    n = get_int("size: ");
}
while (n < 1);

for (int i = 0; i < n; i++)
{
    printf("#");
}
printf("\n")