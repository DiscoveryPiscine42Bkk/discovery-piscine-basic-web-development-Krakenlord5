#!/bin/bash
i=0
for arg
do
	if [ $i -lt 3 ]
	then
		echo $arg
		i=$(($i + 1))
	fi
done
if [ $i -eq 0 ]
then
	echo "No arguments supplied"
fi
