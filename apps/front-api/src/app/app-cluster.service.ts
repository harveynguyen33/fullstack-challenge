import * as cluster from 'cluster';
import * as os from 'os';

import { Injectable } from '@nestjs/common';

const numCPUs = process.env.NODE_ENV === 'local' ? 1 : os.cpus().length;

@Injectable()
export class AppClusterService {
  static clusterize(callback: () => void): void {
    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);
      Array.from({ length: numCPUs }, () => cluster.fork());
      cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {
      callback();
    }
  }
}
