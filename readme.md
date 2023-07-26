# Docker Commands Cheat Sheet

## `docker ps`

Description: Displays a list of running containers.

Parameters:
None

## `docker build -t name .`

Description: Builds a Docker image from the current directory (`.`) and tags it with the specified name.

Parameters:
- `-t name`: Specifies the name and optionally a tag for the image.

## `docker rm name -f`

Description: Removes a stopped container with the given name.

Parameters:
- `name`: The name of the container to remove.
- `-f`: Forcefully stops and removes the container.

## `docker run --name container-name -v /path:/app -p port:port name -d`

Description: Creates and starts a new container from the specified image with custom settings.

Parameters:
- `--name container-name`: Assigns a name to the container.
- `-v /path:/app`: Mounts the host directory `/path` to the container directory `/app`.
- `-p port:port`: Binds a host port to a container port.
- `name`: The name of the Docker image to run.
- `-d`: Runs the container in detached mode (background).

## `docker rm -f $(docker ps -aq)`

Description: Forcefully removes all stopped containers.

Parameters:
- `-f`: Forcefully stops and removes the containers.
- `$(docker ps -aq)`: Command substitution to get a list of all container IDs, which are then passed to the `docker rm` command.
