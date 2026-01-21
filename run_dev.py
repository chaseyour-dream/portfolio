#!/usr/bin/env python3
"""
Development server runner for Portfolio website
Runs both Django backend and React frontend simultaneously
"""

import subprocess
import sys
import os
import time
from threading import Thread

def run_django():
    """Run Django development server"""
    print("🚀 Starting Django backend server...")
    try:
        subprocess.run([sys.executable, "manage.py", "runserver"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Django server stopped")
    except Exception as e:
        print(f"❌ Error running Django server: {e}")

def run_react():
    """Run React development server"""
    print("⚛️  Starting React frontend server...")
    try:
        os.chdir("frontend")
        subprocess.run(["npm", "start"], check=True, shell=True)
    except KeyboardInterrupt:
        print("\n🛑 React server stopped")
    except Exception as e:
        print(f"❌ Error running React server: {e}")

def main():
    print("🌟 Starting Portfolio Development Servers")
    print("=" * 50)
    
    # Start Django in a separate thread
    django_thread = Thread(target=run_django, daemon=True)
    django_thread.start()
    
    # Give Django a moment to start
    time.sleep(2)
    
    # Start React in main thread
    try:
        run_react()
    except KeyboardInterrupt:
        print("\n\n🛑 Shutting down development servers...")
        print("✅ Development servers stopped")

if __name__ == "__main__":
    main()