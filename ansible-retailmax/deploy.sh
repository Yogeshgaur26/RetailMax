#!/bin/bash

cd "$(dirname "$0")"  
ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory playbook.yml