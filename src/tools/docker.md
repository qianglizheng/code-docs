---
title: Docker
category: 开发工具
icon: docker
---

## 1. 安装docker

官网地址：[https://docs.docker.com/engine/install/centos/](https://docs.docker.com/engine/install/centos/)

阿里yum镜像：`http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo`

### 1.1 卸载老版本的docker

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 1.2 设置仓库

```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

这里我把docker官方的仓库替换为阿里的仓库了

### 1.3 安装Docker Engine

```bash
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 1.4 启动Docker

```bash
sudo systemctl start docker
```

### 1.5 开机自启

```bash
systemctl enable docker
```

### 1.6 配置镜像加速器

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://mirror.css.tencentyun.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 2. 镜像操作

### 2.1 检索

```bash
docker search
```

### 2.2 下载

```bash
docker pull
```

### 2.3 列表

```bash
docker images
```

### 2.4 删除

```bash
docker rmi
```

## 3. 容器操作

### 3.1 运行

```bash
docker run
```

常用

```bash
docker run -d -p 80:80 -v /root/app/nghtml:/usr/share/nginx/html --network mynet --restart always --name mynginx nginx
```

目录挂载： `-v /root/app/nghtml:/usr/share/nginx/html`


卷映射： `-v ngconf:/etc/nginx` 文件地址：`/var/lib/docker/volumes/<volume-name>`

卷相关命令：
列出所有卷
```bash
docker volume ls
```
创建卷
```bash
docker volume create
```

删除卷
```bash
docker volume rm
```

查看卷详情
```bash
docker volume inspect ngconf
```

注意：目录挂载会创建一个空目录，卷映射并不是空目录



### 3.2 停止

```bash
docker stop
```

### 3.3 查看

查看所有运行中的容器

```bash
docker ps
```

查看所有容器

```bash
docker ps -a
```

### 3.4 启动

```bash
docker start
```

### 3.5 重启

```bash
docker restart
```

### 3.6 状态

```bash
docker stats
```

### 3.7 日志

```bash
docker logs
```

### 3.8 进入

```bash
docker exec
```

常用

```bash
docker exec -it appname /bin/bash
```

### 3.9 删除

```bash
docker rm
```

强制删除

```bash
docker rm -f
```

### 4. 保存镜像

#### 4.1 提交

```bash
docker commit
```

#### 4.2 保存

```bash
docker save
```

#### 4.3 加载

```bash
docker load
```

### 5. 分享镜像

#### 5.1 登录

```bash
docker login
```

#### 5.2 命名

```bash
docker tag
```

#### 5.3 推送

```bash
docker push
```

### 6. 自定义网络

#### 6.1 创建网络
```bash
docker network create
```

### 7. Docker Compose
#### 7.1 上线
默认文件名为 `compose.yml`
```bash
docker compose up -d
```

指定文件名
```bash
docker compose -f compose.yml up -d
```

#### 7.2 下线
```bash
docker compose down
```

#### 7.3 启动
```bash
docker compose start x1 ... xn
```

#### 7.4 停止
```bash
docker compose stop x1 ... xn
```

#### 7.5 扩容
```bash
docker compose scale x1=3
```

#### 7.6 Compose语法
顶级元素
- `name `
- `services`
- `networks`
- `volumes`
- `configs`
- `secrets`

### 8. DockerFile
#### 8.1 DockerFile编写
官网文档:[https://docs.docker.com/reference/dockerfile/](https://docs.docker.com/reference/dockerfile/)


样例：
```dockerfile
FROM openjdk:17

LABEL author=lizhengqiang

COPY app.jar /app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]
```

#### 8.2 构建

```bash
docker bulid -f DockerFile -t myapp:v1.0.0 .
```