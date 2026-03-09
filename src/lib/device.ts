export function getDeviceId(): string {
    if (typeof window === 'undefined') return 'server';

    let deviceId = localStorage.getItem('syb_device_id');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('syb_device_id', deviceId);
    }

    return deviceId;
}
