# CircuitSafe Backend
## QHacks 2019

The NodeJS backend for my QHacks project CircuitSafe. The Express server has endpoints for file upload and computation of relevant values for the PCB. PCB rendering and file parsing are done using the `pcb-tools` python library.

## Calculation References
- https://www.analog.com/media/en/training-seminars/design-handbooks/Basic-Linear-Design/Chapter12.pdf
- https://www.sphere.bc.ca/class/downloads/ipc_2221a-pcb%20standards.pdf
- https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7175284
- http://www.ti.com/lit/an/scaa082a/scaa082a.pdf


## Installation and Demo

- Run the following:
- `git clone https://github.com/rsgc-peterson-e/qhacks-2019-backend/edit/master/README.md`
- `cd ./qhacks-2019-backend`
- `npm install`
- Before running the server install the python package `pcb-tools` by running `pip3 install pcb-tools`
- run `node app.js` to start the backend server
- For easy testing of the API try using the react frontend website at https://github.com/rsgc-peterson-e/qhacks-react-frontend

## What's Next for CircuitSafe
Continuing to develop the backend and adding more complex circuit analysis.
