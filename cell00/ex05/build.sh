#!/bin/bash
i=0
for arg
do
	mkdir "ex${arg}"
	i=$(($i + 1))
done
if [ $i -eq 0 ]
then
	echo "No arguments provided"
fi
