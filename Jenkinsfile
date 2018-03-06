pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm i -g lerna'
        sh 'npm i'
        sh 'npm run init '
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint:p2b-merchant'
        sh 'npm run lint:p2p-customer'
      }
    }
    stage('Build 1 iOS') {
      parallel {
        stage('Build p2b-merchant iOS') {
          steps {
            sh 'cd  && fasltane ios dev'
          }
        }
        stage('Build 1 Android') {
          steps {
            sh 'cd  && fasltane ios dev'
          }
        }
      }
    }
    stage('build 2 iOS') {
      parallel {
        stage('build 2 iOS') {
          steps {
            sh 'cd  && fasltane ios dev'
            echo 'BIUI'
          }
        }
        stage('build 2 android') {
          steps {
            catchError() {
              sh 'cd  && fasltane ios dev'
            }
            
          }
        }
      }
    }
    stage('End') {
      steps {
        cleanWs(cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true)
      }
    }
  }
}