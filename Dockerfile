# syntax=docker/dockerfile:1
FROM openjdk:17-jdk-alpine
ADD target/LFManagementSystem-0.0.1-SNAPSHOT.jar LFManagementSystem-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT  ["java", "-jar", "LFManagementSystem-0.0.1-SNAPSHOT.jar"]