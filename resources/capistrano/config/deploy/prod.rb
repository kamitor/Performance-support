#env settings
set :application_env, 'master'
set :deploy_to, '/resources2/fileshare'
#set :stage_branch,  'prod'
set :use_sudo, false

role :app, '172.16.0.11', :master => true

# LOGIN
set :user, 'root'
set :ssh_options, { :keys => %w( ~/.ssh/id_rsa ), :port => 22, :config => false  }
set :password, nil # please use ssh public <-> private key auth
