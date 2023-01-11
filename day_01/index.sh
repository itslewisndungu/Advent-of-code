#!/usr/bin/bash

cat main_input.txt | paste -sd+ | sed 's/++/\n/g' | sed 's/+*$//g' | bc | sort -n | tail -3 | paste -sd+ | bc
