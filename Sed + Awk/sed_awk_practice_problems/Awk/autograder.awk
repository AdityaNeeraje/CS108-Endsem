BEGIN {OFS=";"}
NR == 1 {
	$1 = $1
	print $0, "Comments"
}
NR == 2 {
	$1 = $1
	print $0, "-"
	for (i=2; i <= NF; i++){
		array[i]=$i
	}
}
NR > 2 {
	$1 = $1
	valid=1
	for (i=2; i <= NF; i++){
		regex="^[a-zA-Z0-9_]+"array[i]"$"
		if ( $i !~ regex ){
			valid=0
		}
	}
	if (valid == 0){
		print $0, "Wrong Submission Format"
	}		
	else {
		print $0, "Correct Submission Format"
	}		
}
