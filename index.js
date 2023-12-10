const { spawn } = require('child_process');

const command = 'chmod +x ./start.sh && ./start.sh';

const childProcess = spawn(command, {
  shell: true,
  stdio: 'inherit' // ʹ�� 'inherit' �������ӽ��̵����������
});

childProcess.on('exit', (code, signal) => {
  if (code !== null) {
    console.log(`�ӽ����˳����˳���: ${code}`);
  } else if (signal !== null) {
    console.error(`�ӽ��̱���ֹ���ź�: ${signal}`);
  }
});
