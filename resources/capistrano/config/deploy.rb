require 'capistrano/ext/multistage'
require 'pathname'
require 'capistrano_recipes'

set :stages, ["staging", "production"]
set :default_stage, "staging"

set :application, "ps"
set :scm, :git

set :deploy_via, :remote_cache
set :keep_releases, 10
set :run_method, :run
set :use_sudo, true
set :repository, "git@github.com:roanhahn/Performance-support.git"
set :scm_passphrase, ""

set :user, :server-user-name"
default_run_options[:pty] = true
ssh_options[:paranoid] = false
