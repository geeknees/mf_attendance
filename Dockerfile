FROM buildkite/puppeteer
COPY index.js index.js
COPY package.json package.json
ARG COMPANY_NAME
ENV COMPANY_NAME ${COMPANY_NAME}
ARG USER_NAME
ENV USER_NAME ${USER_NAME}
ARG PASSWORD
ENV PASSWORD ${PASSWORD}
ENTRYPOINT ["npm", "start"]