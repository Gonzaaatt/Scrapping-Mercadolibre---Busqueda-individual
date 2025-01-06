import { CronJob } from 'cron';
import { exec } from 'child_process';

// Define el cron job que se ejecutará cada día a medianoche
const job = new CronJob('0 * * * * *', () => {
    console.log('Ejecutando el script de TestCafe...');

    // Ejecuta TestCafe en el archivo test.js
    exec('npm run test')
    console.log('Ejecutando el script de TestCafe...');

});

// Inicia el trabajo programado
job.start();
console.log('Cron job iniciado: Ejecutará el script de TestCafe cada medianoche');
