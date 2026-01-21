#!/usr/bin/env python3
"""
Development tools for Portfolio website
"""

import subprocess
import sys
import os
import time

def clear_react_cache():
    """Clear React development cache"""
    print("🧹 Clearing React cache...")
    try:
        os.chdir("frontend")
        
        # Clear npm cache
        subprocess.run(["npm", "run", "build"], check=False, shell=True)
        
        # Remove node_modules/.cache if exists
        cache_path = "node_modules/.cache"
        if os.path.exists(cache_path):
            import shutil
            shutil.rmtree(cache_path)
            print("✅ Cleared React cache")
        
        os.chdir("..")
    except Exception as e:
        print(f"❌ Error clearing cache: {e}")

def restart_servers():
    """Restart both development servers"""
    print("🔄 Restarting development servers...")
    
    # Kill any existing processes on ports
    try:
        subprocess.run(["npx", "kill-port", "3000"], check=False, shell=True)
        subprocess.run(["npx", "kill-port", "8000"], check=False, shell=True)
        time.sleep(2)
    except:
        pass
    
    print("✅ Servers restarted. Run 'python manage.py runserver' and 'cd frontend && npm start'")

def hard_refresh_guide():
    """Show hard refresh instructions"""
    print("🔄 Hard Refresh Instructions:")
    print("=" * 40)
    print("Windows/Linux:")
    print("  - Ctrl + F5")
    print("  - Ctrl + Shift + R")
    print("  - F12 → Right-click refresh → 'Empty Cache and Hard Reload'")
    print("\nMac:")
    print("  - Cmd + Shift + R")
    print("  - Cmd + Option + R")
    print("\nOr try:")
    print("  - Open DevTools (F12)")
    print("  - Right-click on refresh button")
    print("  - Select 'Empty Cache and Hard Reload'")

def main():
    if len(sys.argv) < 2:
        print("🛠️  Portfolio Development Tools")
        print("Usage:")
        print("  python dev-tools.py cache    - Clear React cache")
        print("  python dev-tools.py restart  - Restart servers")
        print("  python dev-tools.py refresh  - Show hard refresh guide")
        return
    
    command = sys.argv[1].lower()
    
    if command == "cache":
        clear_react_cache()
    elif command == "restart":
        restart_servers()
    elif command == "refresh":
        hard_refresh_guide()
    else:
        print("❌ Unknown command. Use: cache, restart, or refresh")

if __name__ == "__main__":
    main()