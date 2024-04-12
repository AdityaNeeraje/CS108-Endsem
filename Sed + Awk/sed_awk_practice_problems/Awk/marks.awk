BEGIN {FS=","; OFS="\t";} NR==1 {$1=$1; print $0, "Average"} NR > 1 {$1=$1; sum=0; count=0; for (i=2; i <= NF; i++){sum+=$i; count+=1;}; print $0, sum/count;}
