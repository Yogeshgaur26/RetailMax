# RetailMax
E-Commerce Monolith Cloud Migration Platform

**Problem Definition:**

RetailMax, a prominent online retailer, operates a legacy monolithic e-commerce application that faces several operational and developmental challenges:
	•Manual Deployments: Every update (product catalog, cart, checkout) requires manual deployment and configuration of servers, leading to delays and inconsistencies.

	•Downtime During Releases: Frequent unplanned downtime during high-traffic sales events causes loss of revenue and poor customer experience.

	•Slow Release Cycles: The lack of automation leads to slow, error-prone release cycles and delayed feature rollouts.

	•Limited Scalability and Visibility: Their existing infrastructure lacks the ability to scale automatically and provides minimal visibility into application performance.

These issues severely impact RetailMax’s agility, reliability, and ability to compete in a fast-paced e-commerce environment.

 **Project Objective:**

To modernize RetailMax’s monolithic e-commerce platform by migrating it to the cloud and establishing an automated, resilient DevOps workflow that ensures:
	1.	Reliable Cloud Infrastructure: Provision consistent AWS infrastructure (VPC, EC2, security groups) using Terraform.
	2.	Application Portability: Containerize the monolithic application using Docker for environment consistency and portability.
	3.	Automated CI/CD: Implement a Jenkins pipeline to automate building, testing, and deployment processes to AWS.
	4.	Configuration Management: Use Ansible to automate configuration of servers and deployment of containers.
	5.	Zero-Downtime Releases: Enable blue-green or rolling deployments to ensure uninterrupted service during updates.
	6.	Performance Monitoring: Integrate Prometheus and Grafana to provide real-time monitoring and observability into application health and system resources.

Ultimately, the solution should allow faster, safer, and scalable deployments, reduce manual effort, minimize downtime, and provide actionable insights—enhancing RetailMax’s overall operational efficiency and customer experience


## Commit Attribution Note

Some commits in this repository may appear under the name `Aditya Tomar` but are not linked to my GitHub profile (`@adityatomar25`). This happened because earlier commits were made using a local Git configuration with an unregistered system email (`adityatomar@Adityas-MacBook-Air-3.local`), which GitHub does not recognize.

Going forward, all commits are properly attributed using my GitHub-linked email (`143313634+adityatomar25@users.noreply.github.com`). You can still verify authorship by checking the commit history (`git log`), where my name appears as the author.

Thank you for understanding!

[🔗 View Commit History](https://github.com/adityatomar25/RetailMax/commits/main)