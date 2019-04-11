pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        script {
          node { 
            checkout scm

            def customImage = docker.build("my-image:${env.BUILD_ID}")
          }
        }

      }
    }
  }
}
