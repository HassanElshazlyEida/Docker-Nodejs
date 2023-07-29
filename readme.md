# Docker Commands Cheat Sheet

**`docker ps`**

Description: Displays a list of running containers.

Parameters:
None

**`docker build -t name .`**

Description: Builds a Docker image from the current directory (`.`) and tags it with the specified name.

Parameters:
- `-t name`: Specifies the name and optionally a tag for the image.

**`docker rm name -f`**

Description: Removes a stopped container with the given name.

Parameters:
- `name`: The name of the container to remove.
- `-f`: Forcefully stops and removes the container.


**`docker rm -f $(docker ps -aq)`**

Description: Forcefully removes all stopped containers.

Parameters:
- `-f`: Forcefully stops and removes the containers.
- `$(docker ps -aq)`: Command substitution to get a list of all container IDs, which are then passed to the `docker rm` command.

**`docker exec -it name bash`**

Description: Runs an interactive shell (bash) inside a running container with the specified name.

Parameters:
- `-it`: Allocates a pseudo-TTY and keeps STDIN open even if not attached.
- `name`: The name of the running container to access.

**`docker logs container-name`**

Description: This command displays the logs of a specific Docker container.

Parameters:
- `name`: The name or container ID of the Docker container whose logs you want to view.

**`docker run --name container-name -v $(pwd):/app -v /app/node_modules --env-file ./.env -d -p 3001:3001 name`**

Description: This command runs a Docker container with anonymous and named volumes, binding the current host directory to the /app directory in the container, and excluding the /app/node_modules directory from the binding. The container is detached and mapped to port 3001.

Parameters:

- `--name`: Assign a name to the container.
- `-v /path:/app`: Mounts the host directory `/path` to the container directory `/app`. (Two way Binding)
- `-v /path:/app:ro`: Mounts the host directory `/path` to the container directory `/app` with Read-Only. (One way Binding)
- `-p port:port`: Binds a host port to a container port.
- `name`: The name of the Docker image to run.
- `-d`: Runs the container in detached mode (background).
- `-v, --volume`: Bind mount a volume from the host to the container.
- `-v /app/node_modules`: This part creates an anonymous volume for the /app/node_modules directory inside the container. It prevents the /app/node_modules directory from being overwritten by the mounted volume from the host. This is commonly done to improve performance and avoid conflicts with host system dependencies.
- `--env-file ./.env`: This parameter specifies the path to the .env file on the host, which contains environment variable assignments. These variables will be loaded into the container, and your application can access them as if they were set directly within the container's environment.



**`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`**

Description:
This Docker Compose command is used to deploy a production environment using multiple YAML files.

Parameters:
- `-f`, `--file`: Specify the path to one or more Compose files to use.
- `up`: Create and start containers defined in the Compose files.
- `-d`, `--detach`: Run containers in the background.
- `--build`: Build images before starting containers.

**`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build 2>&1 | tee compose_logs.txt`**

Description:
This Docker Compose command is used to deploy a development environment using multiple YAML files and print the logs to a file.

Parameters:
- `-f`, `--file`: Specify the path to one or more Compose files to use.
- `up`: Create and start containers defined in the Compose files.
- `-d`, `--detach`: Run containers in the background.
- `--build`: Build images before starting containers.
- `2>&1`: Redirect both standard error (2) and standard output (1) to the same output stream.
- `| tee compose_logs.txt`: Pipe the output of the `docker-compose` command to the `tee` command, which saves the output to a file named `compose_logs.txt` and also displays it in the terminal.
