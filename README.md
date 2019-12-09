# mf_attendance

INSTALLATION
-------

Clone this repo and cd the directory and

    $ docker build -t geeknees/mf_attendance . --build-arg COMPANY_NAME="your company name" --build-arg USER_NAME="your mail address" --build-arg PASSWORD="your password"

USAGE
-----

### 出勤

    $ docker run geeknees/mf_attendance start

### 退勤

    $ docker run geeknees/mf_attendance end
