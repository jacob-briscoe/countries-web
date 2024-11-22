FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

SHELL ["/bin/zsh", "-c"]

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends sqlite3

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

RUN su node -c "npm install -g npm @angular/cli"
