# Docker Commands Cheat Sheet

**`docker ps -a`**

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


**`docker image ls`  /  `docker volume ls`**
   - Description: These commands list all available Docker images or volumes on your system, respectively.
   - Output: Running the respective command will display a list of all Docker images or volumes, showing details like repository, tag, image ID, and volume name.

**`docker image prune`  /  `docker volume prune`**
   - Description: These commands are used to clean up unused or dangling Docker images or volumes to free up disk space.

**`docker run -d --name watchtower -e WATCHTOWER_TRACE=true -e WATCHTOWER_POLL_INTERVAL=30 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower express-node-app-container`**

Description:
This Docker command runs the Watchtower container, which monitors and updates other Docker containers with newer images when updates are available.

Parameters:
- `-d`, `--detach`: Run the container in the background.
- `--name watchtower`: Assign the name "watchtower" to the running container.
- `-e WATCHTOWER_TRACE=true`: Set the environment variable "WATCHTOWER_TRACE" to "true" to enable debug-level logging for Watchtower.
- `-e WATCHTOWER_POLL_INTERVAL=30`: Set the interval (in seconds) at which Watchtower checks for updated images. In this example, Watchtower will check every 30 seconds.
- `-v /var/run/docker.sock:/var/run/docker.sock`: Mount the Docker socket file inside the Watchtower container, allowing it to communicate with the Docker engine and monitor other containers.
- `containrrr/watchtower`: The Docker image name for Watchtower.
- `express-node-app-container`: The name of the container you want Watchtower to monitor and update with newer images.
