#env settings
set :application_env, 'ute'
set :deploy_to, '/resources/fileshare'
#set :stage_branch,  'test'
set :use_sudo, true

role :app, '172.16.0.13', :master => true

# LOGIN
set :user, 'root'
set :ssh_options, { :keys => %w( ~/.ssh/id_rsa ), :port => 22, :config => false  }
set :password, nil # please use ssh public <-> private key auth
