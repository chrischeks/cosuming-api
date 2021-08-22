import path from 'path';
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '/@universal/configs');

import 'dotenv/config';
import App from '@/app';
import RefundRoute from './consuming-api/refund.route';

const app = new App([new RefundRoute()]);
app.listen();
