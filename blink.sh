#!/bin/bash
pm2 stop siscam
pm2 start --name siscam npm -- start
