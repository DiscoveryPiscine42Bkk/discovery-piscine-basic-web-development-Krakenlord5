#!/bin/bash
TOTAL=0
for file in *
do
	TOTAL=$(($TOTAL + 1))
done
echo $TOTAL
