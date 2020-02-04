#! /bin/bash
while true; do
    {
        node origin_19351.js
        echo "origin 19351 stopped unexpected, restarting"
        sleep 1
    }
done
