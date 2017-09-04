mrequire 'capistrano/ext/multistage'
require 'pathname'

require 'capistrano/server_definition'
require 'capistrano/role'
class Capistrano::Configuration
  def role_names_for_host(host)
    roles.map {|role_name, role| role_name if role.include?(host) }.compact || []
  end
end

# Stages ('testing' because test is reserved word)
set :stages, %w(ute uat prod dev)

# liefst wil ik van testing -> ute hebben. Let wel op dat dit goed gaat.

set :default_stage, 'ute'
set :application_env, 'ute'

# parameters
#set :parameters_dir, "app/config"

# Symlinks
set :app_symlinks, ["/www.performancesupport.eu/public_html/media","/dashboard.performancesupport.eu/public_html/media","/dashboard.performancesupport.eu/public_html/pma"]

# application, domain
set :application, 'ps'
# Source control tool
set :scm, :git
#set(:branch) { "#{stage_branch}" }

set :repository, 'git@github.com:roanhahn/Performance-support.git'

set :deploy_via, :remote_cache
set :keep_releases, 10
set :run_method, :run
set :use_sudo, false

# pseudo-tty
default_run_options[:pty] = true

# Controls how Net::SSH responds to a server key that it does not recognize
ssh_options[:paranoid] = false

after 'deploy:update_code' , 'ps:release:update'
