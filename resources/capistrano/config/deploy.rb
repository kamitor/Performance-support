require 'capistrano/ext/multistage'
set :stages, ["staging", "production"]
set :default_stage, "staging"

set :application, "ps"
set :scm, :git
set :repository, "git@github.com:roanhahn/Performance-support.git"
set :scm_passphrase, ""

set :user, :server-user-name"

